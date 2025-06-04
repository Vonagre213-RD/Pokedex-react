
import "./sidebar.css"
import PokeTypeButton from "./pokeTypeButton"
import pokemonTypes from './buttonTypeData.ts'
interface SideBarProps {
    setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export default function SideBar({ setFilterType }: SideBarProps) {
    return (
        <aside className="SideBar">

            {pokemonTypes.map(({ Icon, type }) => (
                <PokeTypeButton key={type} icon={Icon} type={type} setFilterType={setFilterType} />
            ))}

        </aside>
    );
}