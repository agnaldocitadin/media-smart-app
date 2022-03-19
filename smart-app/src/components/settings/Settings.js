import React from 'react'
import { useSettingsHook } from './SettingsHook'
import Content from '../layout/Content'
import LeftContent from '../layout/LeftContent'
import RightContent from '../layout/RightContent'
import styles from './Settings.css'
import Focusable from '../navigation/Focusable';

// Componente onde terá disponível todas as opções de configuração do app;
const Settings = () => {

    const { hidden, handleBack } = useSettingsHook()

    return (
        <Content style={{ opacity: !hidden ? 1 : 0 }}>
            <LeftContent>
                <Focusable
                    pathKey="eita"
                    onBack={handleBack}>
                    testando o focu
                </Focusable>
            </LeftContent>
            <RightContent>
                <div>righ</div>
            </RightContent>
        </Content>
    )
}

export default Settings