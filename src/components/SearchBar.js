import { Divider, Input } from 'antd';

function SearchBar({ search, setSearch }) {

    //função que lida com algum tipo de input controlado
    // e >> é o evento

    function handleChange(e) {
        //verifica/seta qual foi a tecla pressionada
        setSearch(e.target.value);
        
        // console.log(e.target.value);
    }


    return (
        <div>
            <Divider>Search bar</Divider>
            <label>Search</label>
            <Input type="text" value={search} onChange={handleChange}/>
        </div>
    );
}

export default SearchBar;