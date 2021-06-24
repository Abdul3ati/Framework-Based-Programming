import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post"

class BlogPost extends Component{
    state ={
        listArtikel:[],
        insertArtikel: {
            userID: 1,
            id: 1,
            nim: "",
            Name: "",
            Address: "",
            HP: "",
            Angkatan: "",
            Status: ""
        }
    }

    ambilDataDariServerAPI= () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch( `http://localhost:3001/posts/${data}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }
    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel:formInsertArtikel
        });
    }
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pd-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="Name" name="Name" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="Address" name="Address" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="HP" name="HP" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="Angkatan" name="Angkatan" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status </label>
                        <div className="col-sm-10">
                            <input type ="text" className="form-control" id="Status" name="Status" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Save</button>
                </div>
                
                <h2>students Data</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} nim={artikel.nim} Name={artikel.Name} Address={artikel.Address} HP={artikel.HP} Angkatan={artikel.Angkatan} Status={artikel.Status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;