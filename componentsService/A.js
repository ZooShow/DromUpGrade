// Компонент ссылки без перезагрузки если есть href или кнопки если есть type

import React from 'react';
import Link from 'next/link';

export default function A({href, children, className, type, style = undefined, ...props}) {
	return href ?
		<Link href={href || '#'}>
			<a className={className} style={style} {...props}>
				{children}
			</a>
		</Link>
		:
		type ?
			<button type={type} className={className} style={style} {...props}>{children}</button>
			:
			<div className={className} style={style} {...props}>{children}</div>;
}