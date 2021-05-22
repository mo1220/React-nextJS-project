import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Section from '../src/component/login/section';
import { Content } from 'antd/lib/layout/layout';

export default function Home() {
  return (
    <div>
      <Section/>
    </div>
  )
}
