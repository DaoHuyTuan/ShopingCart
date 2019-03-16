import React from "react";
class SlideImage extends React.Component {
    constructor(props) {
        super(props);
        this.bundleImage = {}
        
    }
    componentDidMount() {
        
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.bundleImage = nextProps.bundleImage;
       
    }
    render() {
        let biggestImage;  
        let datas = Object.keys(this.bundleImage).map(function (key, index) {
            biggestImage =  (
                <img className="bigImg" src={this.bundleImage[0].url} alt={this.bundleImage[0].alt}/>
            )
                return (
                    <div className="thumbnail-item" key={key}>
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
                    {biggestImage}
                </div>
            </div>
        )   
    }
}
export default SlideImage;