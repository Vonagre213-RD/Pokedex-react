import "./sidebar.css"

type props = {
    icon: string
    type: string
    setFilterType: React.Dispatch<React.SetStateAction<string>>
}

export default function PokeTypeButton({ icon, type, setFilterType }: props) {

    const handleFilter = () => {
        setFilterType(type)
        
    }
    return (
        <button className="sideBar__pokeButton" onClick={handleFilter} title={`type ${type} button`} >
            <img src={icon} alt={type} />
        </button>
    )
}