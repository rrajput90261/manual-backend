import autocannon from "autocannon";

const url = "http://localhost:9090/api/test_limit";

const instance = autocannon(
    {
        url: url,
        duration: 60,       // 1 minute
        connections: 100,   // concurrent connections
        pipelining: 1,
        method: "GET"
    },
    (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(autocannon.printResult(result));

    
    }
);

instance.on("response",(client,statusCode)=>{
    
})