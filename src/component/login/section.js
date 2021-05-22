import React, { useState } from 'react';
import { Button } from 'antd';

function section(props) {
    const [input, setInput] = useState({
        userId:'',
        userPw: ''
    })

    const {userId, userPw} = input;
    
    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        })
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(input.userId === 'admin' && input.userPw === '1234'){
            location.href = '/landingPage';
        }
        else{
            alert('로그인 실패')
        }
    }

    return (
        <div className='section-wrap'>
            <h3>LOGIN</h3>
            <div className="form-wrap">
            <form>
                <div className="input-wrap">
                    <label className="label">ID</label>
                        <input 
                            type="text"
                            placeholder="Id"
                            className="input"
                            name="userId"
                            value={userId}  
                            required
                            onChange={onChangeHandler}/>
                    {/* <em>아이디를 입력해주세요</em> */}
                    <label 
                        className="label">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        name="userPw"
                        value={userPw}  
                        required
                        onChange={onChangeHandler}/>
                    {/* <em>비밀번호를 입력해주세요</em> */}
                </div>
            <div style={{margin: '10px 0 0'}}>
                <input 
                    id="id_save" 
                    type="checkbox"/>
                <label 
                    htmlFor="id_save" 
                    className="checkbox">아이디 저장
                </label>
            </div>
        <div className="button-wrap">
          <Button type="primary" onClick={onSubmit}>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </form>
    </div>

</div>
    );
}

export default section;