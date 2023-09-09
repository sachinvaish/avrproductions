import React from 'react' ;

const Set = (props)=>{
    const styles = {
        container: {
            position: 'relative' ,
            width: '25%' ,
            height: '100px' , 
            textAlign: 'center' ,
            display: 'flex' ,
            alignItems: 'center' ,
            justifyContent: 'center' 
        },
        backgroundText: {
            fontsize: '80px' , 
            color: '#d4d4d4' ,
            position: 'absolute' ,
            fontWeight:'bold',
            top: '0' ,
            left: '0' ,
            right: '0' ,
            bottom: '0' ,
            display: 'flex' ,
            alignItems: 'center' ,
            justifyContent: 'center' 
        },
        frontText:{
            fontSize: '15px' , /* 4 times smaller than the background text */
            color: '#0f0f0f' , /* Assuming the background is light gray */
            position: 'absolute' ,
            fontWeight:'bold',
            top: '12px' ,
            left: '0' ,
            right: '0' ,
            bottom: '0' ,
            display: 'flex' ,
            alignItems: 'center' ,
            justifyContent: 'center' 
        }
      }
    return(
        <div style={styles.container}>
        <h1 style={styles.backgroundText}>{props.backText}</h1>
        <p style={styles.frontText}>{props.frontText}</p>
    </div>
    )
}

export default function Numbers() {

  return (
    <section className="wow animate__fadeIn">
    <h3 className="alt-font row justify-content-center align-items-center" style={{marginBottom:'100px'}}>Our Numbers</h3>
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        <Set backText='18+' frontText='YEARS OF EXPERIENCE'/>
        <Set backText='1000+' frontText='RETAIL STORE LAUNCHES'/>
        <Set backText='20+' frontText='STATES CONQUERED'/>
        <Set backText='100+' frontText='CREW MEMBERS'/>
        <Set backText='300+' frontText='CITIES'/>
        <Set backText='500+' frontText='B2B & B2C EVENTS'/>
        <Set backText='∞' frontText='IDEAS'/>
      </div>
    </div>
    
  </section>
  ) ;
}
