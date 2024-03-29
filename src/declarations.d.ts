/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jul 22 2021 10:11:13 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

// declaration.d.ts
declare module '*.sass';
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
