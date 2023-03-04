import {Component} from 'react'
import './index.css'

class Calculation extends Component{
    state={inputValue:"", primeRes:"",isPrimeRes:false, factRes:'',isFactRes:false, fibRes:'',isFibRes:false, armstrongRes:'', isArmstrongRes: false}

    onChangeInputValue=event=>{
        this.setState({inputValue:event.target.value, isPrimeRes:false, isFactRes:false, isFibRes:false, isArmstrongRes: false})
    }

    onCheckPrime=()=>{
        const {inputValue}=this.state
        let result;
        let factors = 0;
        if(inputValue===''){
            alert('Enter a valid number')
        }
        else{
            let num=parseInt(inputValue)
            for(let i=2;i<num;i++){
                if(num%i===0){
                    factors += 1

                }
            }
            if(factors === 0 && num >=2){
                result='Prime'
            }
            else{
                result='not Prime'
            }
            
        }
        this.setState({primeRes:result,isPrimeRes:true})
       
    }

    onCalculateFactorial=()=>{
        const {inputValue}=this.state
        if(inputValue===''){
            alert("Enter a valid num")
        }
        else{
            let n=parseInt(inputValue)
            let fact=1
            for(let i=1;i<=n;i++){
                fact*=i
            }
            this.setState({factRes:fact,isFactRes:true})
        }
    }

    onCheckFabinocci=()=>{
        const {inputValue}=this.state
        let n=parseInt(inputValue)
        let fibonnaci
        let f=[0,1]
        for (let i=2;i<=n;i++){
            f.push(f[i-1]+f[i-2])
        }
        fibonnaci=f[n]
        this.setState({fibRes:fibonnaci,isFibRes:true})
    }

    onCheckArmstrong=()=>{
        const {inputValue} = this.state 
        let length = inputValue.length
        let sum = 0;
        let result;
        for (let num of inputValue){
            sum += parseInt(num)**length;
        }
        if (sum === parseInt(inputValue)){
            result="an Armstrong number"
        }else{
            result = "not an Armstrong number"
        }
        this.setState({armstrongRes: result, isArmstrongRes: true})
    }

    render(){
        const {inputValue,isPrimeRes,primeRes,factRes,isFactRes, fibRes, isFibRes, armstrongRes,isArmstrongRes}=this.state
        return(
            <>
            <div className='inputContainer'>
                <p className="inputTitle">Enter a Number</p>
                <input className="input" type="text" onChange={this.onChangeInputValue} value={inputValue} placeholder="Enter here" />
            </div>
            <div className="calculationPartContainer">
            <div className="calculatorContainer">
                <button type="button" className="primeButton" onClick={this.onCheckPrime}>Prime Number</button>
                {isPrimeRes?<p>The number is {primeRes}</p>:<p>The number is </p>}
            </div>
            <div className="calculatorContainer">
                <button className="factButton" onClick={this.onCalculateFactorial}>Factorial</button>
                {isFactRes?<p>The factorial is {factRes}</p>:<p>The factorial value is</p>}
            </div>
            <div className="calculatorContainer">
                <button className="fibButton" onClick={this.onCheckFabinocci}>Fabinocci</button>
                {isFibRes?<p>The fibonnaci number is {fibRes}</p>:<p>The fibonnaci number is</p>}
            </div>

            <div className='calculationContainer'>
                <button className='armstrongButton' onClick={this.onCheckArmstrong}>Armstrong</button>
                {isArmstrongRes?<p>The number is {armstrongRes}</p>:<p>The number is </p>}
            </div>




            </div>
            </>
        )
    }
}

export default Calculation