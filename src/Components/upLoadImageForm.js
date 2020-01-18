import React, { Component } from 'react'

export class upLoadImageForm extends Component {
    render() {
        return (
            <div>
                <form action='/api/imagesUpload' method="post" enctype="multipart/form-data">
                    <input type='file' name='image' />
                </form>
            </div>
        )
    }
}

export default upLoadImageForm
