'use client';

import React, { useEffect } from 'react'

export const WeeklyComponent = () => {
  const originObj = {a: 1, b: {c:2, d:3}};
  const deecopy = (obj:any) => {
    const newObj:any = {};
    if(typeof obj === 'object'){
      repeaFunc(obj)
      Object.entries(obj).map(([key,value]) => {
        if(typeof value === 'object'){
          Object.entries(newObj[key]).map(([key2,value2]) => {
            newObj[key][key2] = value2
          })
        } else{
          newObj[key] = value;
        }
      })
    }
 
    return newObj;
  }
  const repeaFunc = (test:any) => {
    let dd:any = {};
    Object.entries(test).map(([key,value]) => {
      if(typeof test == 'object'){
        // dd[key] = value;
        repeaFunc(dd)
      }
      return;
    })
    return dd;
  }

  const shallowCopy = () => {
    const obj = originObj;
    return obj
  }
  useEffect(()=>{
    console.log(repeaFunc({a:1,b:{c:2,d:{e:3}}}))
  },[])
  return (
    <div></div>
  )
}

export default WeeklyComponent;