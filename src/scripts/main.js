// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

fetch("http://localhost:8088/businesses")
        .then(function (res) {
                return res.json();
        })
        .then(function (data) {
                data = JSON.stringify(data);
                data = JSON.parse(data);
                console.log(data);
                const outEl = document.querySelector("#output")
                const purchasingAgent = data.map(business => {
                        return {
                                fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameFirst}`,
                                company: `${business.companyName}`,
                                phoneNumber: `${business.phoneWork}`
                        }
                })
                console.log(purchasingAgent)
        })


