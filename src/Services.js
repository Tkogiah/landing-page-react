export default function Services() {
    return (
        <div className='services'>
            <h2 className='services-text'>OUR SERVICES</h2>
            <div className='services-div'>

                <div>
                    <img className='service-image' src='https://assets.codepen.io/6060109/agency-service-1.png' alt="web design visual"/>
                    <p className='pic-text'>WEB DESIGN</p>
                </div>
                
                <div>
                    <img className='service-image' src='https://assets.codepen.io/6060109/agency-service-2.png' alt="ecommerce visual"/>
                    <p className='pic-text'>ECOMMERCE</p>       
                </div>
                
                <div >
                    <img className='service-image' src='https://assets.codepen.io/6060109/agency-service-3.png' alt="automation visual"/>
                    <p className='pic-text'>AUTOMATION</p>
                </div>
                
            </div>
            
        </div>
    )
}