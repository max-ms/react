import React from "react"

export default class Settings extends React.Component {
    render() {
        return (
<div>       
    <div class="content-section-a">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer" />
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Google Web Fonts and<br />Font Awesome Icons</h2>
                    <p class="lead">This template features the 'Lato' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="img/phones.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>          
        );
    }
}