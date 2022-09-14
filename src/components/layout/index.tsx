import Navbar from '../navbar'
import Footer from '../footer'

function main(props: any) {
    const {children} = props;

    return (<>
        {/* Navbar */}
        <Navbar/>

        {/* context */}
        {children}
        
        {/* Footer */}
        <Footer/>
    </>)
}

export default main
