import React,{Component} from 'react';
import 'whatwg-fetch';

 class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.product.id,
            product_code:this.props.product.product_code,
            category:this.props.product.category,
            description:this.props.product.description,
            cost:this.props.product.cost,
            price:this.props.product.price,
            qty_on_hand:this.props.product.qty_on_hand,
            is_active:this.props.product.is_active,
            image_data:this.props.product.image_data
        };
       // this.getFileData = this.getFileData.bind(this);
        this.previewFile = this.previewFile.bind(this);
      //  this.getFormData = this.getFormData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFiles = this.handleFiles.bind(this);
      }
    //   getFormData(object) {
    //     const formData = new FormData();
    //     Object.keys(object).forEach(key => formData.append(key, object[key]));
    //     return formData;
    // }
    // componentDidMount() {
    //     fetch('/api/products')
    //       .then(res => res.json())
    //       .then(json => {this.setState({products: json});
    //       })
    //       .then(()=>{
    //           console.log(this.state);
    //       })
    //   }
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }
    previewFile() {
        var preview = document.getElementById('thumbnail');
        const file = document.getElementById(this.file_id).files[0];
        var reader  = new FileReader();
      
        
        reader.addEventListener("load", function () {
          preview.src = reader.result;
       }, false)
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

    handleSubmit(event) {
        
        event.preventDefault();
        const file = document.getElementById(`thumbnail-${this.state.id}`).src;
        const prod_id = event.target._id;
        const data = this.getFormData(this.state);
          fetch(`/api/products/update/${this.state.id}`, {
          method:'POST',
          body: data
        })
        .then(alert("Product has been updated."));
        
       
    }

    handleDelete(event) {
        
        event.preventDefault();
        const id = event.target._id;
          fetch(`/api/products/delete/${id}`, {
          method:'POST'
        })
        .then(alert("Product has been deleted."));
        
       
    }
     render() {
        //  const id=productData.id;
        //  const category=productData.category;
        //  const product_code=productData.product_code;
        //  const description=productData.description;
        //  const cost=productData.cost;
        //  const price=productData.price;
        //  const qty_on_hand=productData.qty_on_hand;
        //  const is_active = productData.is_active;
        //  const image_data = productData.image_data
         const categories=['Freshwater', 'Saltwater','Dry_Goods']
      
         let optionItems = categories.map((category)=>
          <option key={category}>{category}</option>
          );
          //returns one table row which is its own form to edit and submit changes to each product
        return (

            
            <form id={this.state.id} onSubmit={this.handleSubmit}>
            <tr>
                <td><select name={`category`} value={this.state.category} //form={id}
            onChange={this.handleInputChange}>{optionItems}</select></td>
                <td><input
                        name={`product_code`}
                        type="text"
                        onClick={this.select}
                        value={this.state.product_code}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`description`}
                        type="text"
                        onClick={this.select}
                        value={this.state.description}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`cost`}
                        type="Number"
                        onClick={this.select}
                        value={this.state.cost}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`price`}
                        type="Number"
                        onClick={this.select}
                        value={this.state.price}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`qty_on_hand`}
                        type="Number"
                        onClick={this.select}
                        value={this.state.qty_on_hand}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`is_active`}
                        type="Checkbox"
                        onClick={this.select}
                        checked={this.state.is_active}
                        value={this.state.is_active}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        name={`product_code`}
                        type="Number"
                        onClick={this.select}
                        value={this.state.product_code}
                        onChange={this.handleInputChange} /></td>
                <td><input
                        type="file" 
                        id={`file-${this.state.id}`} 
                        accept="image/*" 
                        onChange={this.previewFile.bind(this)}>
                    </input>
                        <img 
                            id={`thumbnail-${this.state.id}`}
                            alt="Add-image"
                            className="thumb" 
                            src={this.state.image_data} 
                            height="50"
                            width="75"
                        />
                    
                        </td>
                <td><input
                        type="hidden"
                        id="id"
                        value={this.state.id}
                    />
                        </td>
                <td><button onClick={this.handleSubmit} className='btn btn-sm btn-secondary'>Update</button>
                <button onClick={() => this.deleteProduct()}>x</button></td>
            
            </tr>
            </form>
            
        )
     }
    
}

export default ItemForm; 