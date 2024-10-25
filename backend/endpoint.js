import {NextResponse} from 'next/server'
const apiURL = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
export async function handler() {
    


    return NextResponse.json({
        
    });
}