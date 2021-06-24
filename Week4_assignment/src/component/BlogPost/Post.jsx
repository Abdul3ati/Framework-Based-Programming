import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="konten-artikel">
                <div className="judul-artikel">NIM: {props.nim}</div>
                <div className="judul-artikel">Name: {props.Name}</div>
                <div className="judul-artikel">Address: {props.Address}</div>
                <div className="judul-artikel">HP: {props.HP}</div>
                <div className="judul-artikel">Angkatan: {props.Angkatan}</div>
                <div className="judul-artikel">Status: {props.Status}</div>
                
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Delete</button>
            </div>
        </div>
    )
}

export default Post;