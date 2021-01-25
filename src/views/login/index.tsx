import * as React from 'react';
// import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd';
// import * as  connect  from 'react-redux'

// const FormItem = Form.Item


export interface Props {
  loading:boolean ,
  isCertificates:boolean,
  show:boolean,
  name:String
}

export default class Login extends  React.Component<Props, {}> {
  // 初始化页面常量 绑定事件方法
  constructor(props: Props) {
    super(props)
    // const {loading,isCertificates,show} = this.props
    // state:Props ={
    //   loading: false,
    //   isCertificates: false,
    //   show: true,
    // }
  
  }

  public state:Props= {
    loading: false,
    isCertificates: false,
    show: true,
    name:"000000000"
  }


  render(){
    const {loading,name}=this.state;
    debugger
    return (
      <div>
        <span>woshi</span>
        <span>{name}</span>
        </div>
    )
  }


}