import React, { Component } from 'react'
import AssideNav from '../AssideNav';
import Skill from './Skill';


export default class SkillForm extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
            skillList: [],
            skill:'',
        }
        
    }

        value = (event) => {
            this.setState({
                    skill: event.target.value
            })
            

            }

        addSkill = (event) => {
            this.setState({
                skillList: [...this.state.skillList, this.state.skill],
            })
        
            event.preventDefault();
        }
    



    render() {


    

        return (
            <div className='py-1 my-5 font-openSans bg-white rounded-[8px]'>
                <AssideNav navClassName="font-openSans text-xl text-[#1F2A36]" nav1="Skill" />
                <hr className='w-full' />
                <form onSubmit={this.addSkill} className='flex gap-5 w-full p-7'>
                    <div className="flex flex-col w-full">
                        <label htmlFor="skill">{this.props.label}</label>
                        <input type="text" onChange={this.value} key={this.props.key} name={this.props.identity} className="dataDiri-InputClass w-full" id="skill" placeholder="Masukkan Skill" autoComplete='off'/>
                    </div>
                    <button type='submit' className='w-20 h-12 rounded-[4px] bg-[#FBB017] text-[#FFFFFF] font-openSans self-end hover:scale-[1.05]'>
                        Simpan
                    </button>
                </form>
                <Skill list={this.state.skillList} />
            </div>
        )
    }
}
