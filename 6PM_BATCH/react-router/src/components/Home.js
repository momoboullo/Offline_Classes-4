import React , {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4 text-warning">Welcome to React Router</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda, atque aut beatae debitis dignissimos, dolore ea eum ex hic id maiores molestias obcaecati porro quae quia quos recusandae rem reprehenderit sequi vel voluptatibus! Dicta excepturi exercitationem laboriosam veniam!</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur deleniti dolores enim eos fugit itaque laborum quidem veritatis vero! Consectetur modi quasi voluptates. Autem consequuntur excepturi illum ipsum officiis perferendis repellendus voluptatum. Amet, animi dolorem ipsam molestias quam sunt. Cupiditate dolorum, est fugit incidunt obcaecati praesentium rem soluta voluptatibus.</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda, atque aut beatae debitis dignissimos, dolore ea eum ex hic id maiores molestias obcaecati porro quae quia quos recusandae rem reprehenderit sequi vel voluptatibus! Dicta excepturi exercitationem laboriosam veniam!</p>
                    <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                            container.</p>
                        <a className="btn btn-warning btn-lg" href="/" role="button">Learn more</a>
                </div>
            </div>
        );
    }
}

export default Home;