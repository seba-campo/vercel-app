'use-client'
import React from "react"
import {Button, SecondaryButton, OutlinedButton} from "../../ui/button/button"
import Layout from "../../components/Layout"

export default function Ui(){
    return (
        <Layout>
            <div>
                <Button>Hola</Button>
            </div>
            <div>
                <SecondaryButton>Hola secundario</SecondaryButton>
            </div>
            <div>
                <OutlinedButton>Hola outline</OutlinedButton>
            </div>
        </Layout>
    )
}