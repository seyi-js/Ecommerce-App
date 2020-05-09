import React, {useState, useEffect} from 'react'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Container, Card, CardBody, CardColumns, CardHeader, Row, Col } from 'reactstrap';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Footer from './Footer'
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Layout from './Layout'
import PersonIcon from '@material-ui/icons/Person';
export const Home = () => {
    const [ chartData, setChartData ] = useState( {} );
    const [options, setOptions] = useState({})

    useEffect( () => {
        getData()
    }, [])

     //Set Data to State
  const getData = () => {
    setChartData( {
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' ],//End Of labels
      datasets: [ {
        label: 'Poupulation',
        data: [
          78000,
          60790,
          78543,
          45743,
          67854,
          97543,
          34765,
          35577
        ],//End of Data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(25, 39, 200, 0.6)',
          'rgba(255, 109, 32, 0.6)',
          'rgba(75, 100, 232, 0.6)',
          'rgba(255, 190, 12, 0.6)',
          'rgba(90, 142, 255, 0.6)',
          'rgba(132, 99, 255, 0.6)',
          'rgba(78, 140, 200, 0.6)'
        ],//End of bgColor
        fill: true
      }]//End of dataSets
    } )///End of Set Chart Data
    
    setOptions( {
      title: {
        display: true,
        text: 'Sales',
        fontsize:30
      },// End Of title
      legend: {
        display: true,
        position: 'right'
      }// End Of legend
    })

   }// End Get Data

    
    return (
        <React.Fragment>
            <Layout/>
            <Container>
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info " style={{height: '150px', marginBottom: '10px'}} >
                            <CardBody className="pb-0">
                        <div className="text-value">9.823</div>
                               <PeopleIcon/>{' '} <div>Members online</div>
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-info " style={{height: '150px', marginBottom: '10px'}} >
                        <CardBody className="pb-0">
                    <div className="text-value">9.823</div>
                          <div>Products</div>
                            </CardBody>
                    </Card>
                    </Col>
                    
                    <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-info " style={{height: '150px', marginBottom: '10px'}} >
                        <CardBody className="pb-0">
                    <div className="text-value">9.823</div>
                           <AccountBalanceIcon/>{' '} <div>Account balance</div>
                            </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-info " style={{height: '150px', marginBottom: '10px'}} >
                        <CardBody className="pb-0">
                    <div className="text-value">9.823</div>
                           <PersonIcon/>{' '} <div>Visitors</div>
                            </CardBody>
                    </Card>
                    </Col>
                   
                </Row>
            
           
            <CardColumns className="cols-2">
                <Card>
                    <CardHeader className="bg-info">
                        Sales
                    </CardHeader>
                    <CardBody>
                        <div className="chart">
                        <Bar data={chartData} options={options} />
                        </div>
                       
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader className="bg-info">
                        Sales
                    </CardHeader>
                    <CardBody>
                        <div className="chart">
                        <Line data={chartData} options={options} />
                        </div>
                       
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader className="bg-info">
                        Sales
                    </CardHeader>
                    <CardBody>
                        <div className="chart">
                        <Radar data={chartData} options={options} />
                        </div>
                       
                    </CardBody>
                </Card>
                </CardColumns>
                </Container>
                <Footer/>
        </React.Fragment>
    )
}


export default Home