import React from "react";
class SlideImage extends React.Component {
    constructor(props) {
        super(props);
        this.bundleImage = {}
        this.changeBigImage = this.changeBigImage.bind(this);
        this.state = {
            biggestImage: ""
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.bundleImage = nextProps.bundleImage;  
        this.setState({
            biggestImage:<img className="bigImg" src={this.bundleImage[0].url} alt={this.bundleImage[0].url}/>
        })
    }
    changeBigImage = (url) => {
        console.log(url)
        this.setState({
            biggestImage: <img className="bigImg" src={url} alt={url}/>
        })

    }
    render() {
        let datas = Object.keys(this.bundleImage).map(function (key, index) {
           
                return (
                    <div className="thumbnail-item" key={key} onClick={this.changeBigImage.bind(this,this.bundleImage[index].url)}>
                        <img className="thumbnail" src={this.bundleImage[index].url} alt={this.bundleImage[index].alt}/>
                    </div>
                )    
        }.bind(this))
        return(
            <div className="slideImage">
                <div className="slideImage-thumbnail">
                    {datas}
                </div>
                <div className="slideImage-bigImg">
                    {this.state.biggestImage}
                </div>
            </div>
        )   
    }
}
export default SlideImage;