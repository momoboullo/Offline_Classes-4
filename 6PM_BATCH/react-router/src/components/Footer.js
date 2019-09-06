import React , {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <footer className="p-3 bg-warning text-white text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3>Copyright &copy; 2019 , UiBrains.com</h3>
                                <h6>All Rights Reserved</h6>
                                <h6>Developed & Maintained by
                                    <a className="text-white" href="https://github.com/thenaveensaggam"
                                       target="_blank">
                                        <i className="fa fa-users"/> UiBrains.com
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;