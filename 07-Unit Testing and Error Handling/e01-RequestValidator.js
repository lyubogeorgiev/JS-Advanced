function validate(requestObject){
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const uriExpression = /^(([\w+\.])+|(\*))$/g;
    const messageExpression = /[<>\\&'"]/g

    // console.log(uriExpression.test(requestObject.uri));
    // console.log(methods.includes(requestObject.method));
    // console.log(requestObject.keys);

    if (!Object.getOwnPropertyNames(requestObject).includes('method') || !methods.includes(requestObject.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!Object.getOwnPropertyNames(requestObject).includes('uri') || !uriExpression.test(requestObject.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!Object.getOwnPropertyNames(requestObject).includes('version') || !versions.includes(requestObject.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!Object.getOwnPropertyNames(requestObject).includes('message') || messageExpression.test(requestObject.message)){
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObject;
}

function requestObject(){
    return {
        method: 'GET',
        uri: 'HTTP.GET',
        version: 'HTTP/1.1',
        message: 'something'
    };
}

console.log(validate(requestObject()));;