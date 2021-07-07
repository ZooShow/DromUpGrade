import React from "react";
import s from './Page.module.scss';

export default function Page({children}) {

    return (
        <div className={s.ctn}>
            <h1 className={s.title}>Тестовое сообщение</h1>
            <div className={s.content}>
                {children}
            </div>
        </div>
    );
}