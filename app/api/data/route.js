
export async function GET (request) {
    const data ={
        name: 'bob',
        age: 10,
        bio: 'Some info'
    }
   return new Response(JSON.stringify(data));
}

export async function POST(request){
    return new Response(request.body);
}
export async function PUT(request){
    return new Response(request.body);
}
