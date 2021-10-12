"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3065],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,w=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(w,i(i({ref:t},c),{},{components:n})):o.createElement(w,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Running Hello World Workflow",u={unversionedId:"running-workflows/running-first-workflow",id:"running-workflows/running-first-workflow",isDocsHomePage:!1,title:"Running Hello World Workflow",description:"In this article we will explore how you can run a really simple workflow that runs without any microservice. Yes!",source:"@site/docs/running-workflows/running-first-workflow.md",sourceDirName:"running-workflows",slug:"/running-workflows/running-first-workflow",permalink:"/docs/docs/running-workflows/running-first-workflow",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/running-workflows/running-first-workflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialsSideBar",previous:{title:"Running Your First Worker",permalink:"/docs/docs/running-workflows/running-first-worker"},next:{title:"Running Workers Across Services",permalink:"/docs/docs/running-workflows/running-workers-microservices"}},c=[{value:"1. Configuring your First Workflow",id:"1-configuring-your-first-workflow",children:[]},{value:"2. Running your First Workflow",id:"2-running-your-first-workflow",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:c};function f(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-hello-world-workflow"},"Running Hello World Workflow"),(0,a.kt)("p",null,"In this article we will explore how you can run a really simple workflow that runs without any microservice. Yes!\nConductor has in-built tasks that you can use to run quite a bit of things. We will use one of these in-built tasks to\nrun your very first workflow."),(0,a.kt)("p",null,"Using system or in-built tasks is a great way to run a lot of your code in production."),(0,a.kt)("p",null,"After following the steps listed in this article, you would have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run your first workflow"),(0,a.kt)("li",{parentName:"ol"},"Learn how system or in-built tasks work - specifically the HTTP")),(0,a.kt)("p",null,"This post is specifically for running a sample workflow in your environment to ensure that everything is working as\nexpected. You can refer to one of the following posts to set up your environments before continuing with the post if you\ndon\u2019t already have an environment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/docs/getting-started-local/running-locally"},"Running Locally - From Code")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/docs/getting-started-local/running-locally-docker"},"Running Locally - Docker Compose")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/docs/getting-started-local/running-locally-minikube"},"Running Locally - Kubernetes"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1-configuring-your-first-workflow"},"1. Configuring your First Workflow"),(0,a.kt)("p",null,"This is a sample workflow that you can leverage for your test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createTime": 1627629229443,\n  "updateTime": 1630694890267,\n  "name": "first_sample_workflow",\n  "description": "First Sample Workflow",\n  "version": 1,\n  "tasks": [\n    {\n      "name": "get_population_data",\n      "taskReferenceName": "get_population_data",\n      "inputParameters": {\n        "http_request": {\n          "uri": "https://datausa.io/api/data?drilldowns=Nation&measures=Population",\n          "method": "GET"\n        }\n      },\n      "type": "HTTP",\n      "decisionCases": {},\n      "defaultCase": [],\n      "forkTasks": [],\n      "startDelay": 0,\n      "joinOn": [],\n      "optional": false,\n      "defaultExclusiveJoinTask": [],\n      "asyncComplete": false,\n      "loopOver": []\n    }\n  ],\n  "inputParameters": [],\n  "outputParameters": {\n    "data": "${get_population_data.output.response.body.data}",\n    "source": "${get_population_data.output.response.body.source}"\n  },\n  "schemaVersion": 2,\n  "restartable": true,\n  "workflowStatusListenerEnabled": false,\n  "ownerEmail": "example@email.com",\n  "timeoutPolicy": "ALERT_ONLY",\n  "timeoutSeconds": 0,\n  "variables": {}\n}\n')),(0,a.kt)("p",null,"This is an example workflow that queries a publicly available JSON API to retrieve some data. This workflow doesn\u2019t\nrequire any worker implementation as the tasks in this workflow are managed by the system itself. This is an awesome\nfeature of Conductor. For a lot of typical work, you won\u2019t have to write any code at all."),(0,a.kt)("p",null,"Let's talk about this workflow a little more so that you can gain some context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"name" : "first_sample_workflow"\n')),(0,a.kt)("p",null,"This line here is how you name your workflow. In this case our workflow name is ",(0,a.kt)("inlineCode",{parentName:"p"},"first_sample_workflow")),(0,a.kt)("p",null,"This workflow contains just one worker. The workers are defined under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks"),". Here is the worker definition\nwith the most important values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "get_population_data",\n  "taskReferenceName": "get_population_data",\n  "inputParameters": {\n    "http_request": {\n      "uri": "https://datausa.io/api/data?drilldowns=Nation&measures=Population",\n      "method": "GET"\n    }\n  },\n  "type": "HTTP"\n}\n')),(0,a.kt)("p",null,"Here is a list of fields and what it does:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"name"')," : Name of your worker"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"taskReferenceName"')," : This is a reference to this worker in this specific workflow implementation. You can multiple\nworkers of the same name in your workflow but you will need a unique task reference name for each of them. Task\nreference name should be unique across your entire workflow."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"inputParameters"')," : These are the inputs into your worker. You can hard code inputs as we have done here. You can\nalso provide dynamic inputs such as from the workflow input or based on the output of another worker. You can find\nexamples of this in our documentation."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"type"')," : This is what defines what the type of worker is. In our example - this is ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP"),". There are more task\ntypes which you can find in the Conductor documentation."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"http_request"')," : This is an input that is required for tasks of type ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP"),". In our example we have provided a well\nknown internet JSON API url and the type of HTTP method to invoke - ",(0,a.kt)("inlineCode",{parentName:"li"},"GET"))),(0,a.kt)("p",null,"We haven't talked about the other fields here such as ",(0,a.kt)("inlineCode",{parentName:"p"},"createTime")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"restartable")," etc. as these are either just\nmetadata or more advanced concepts which we can learn more in the detailed documentation."),(0,a.kt)("p",null,"Ok, now that we have walked through our workflow details, let's run this and see how it works."),(0,a.kt)("p",null,"To configure the workflow, head over to the swagger API of conductor server and access the metadata workflow create API:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/swagger-ui/index.html?configUrl=/api-docs/swagger-config#/metadata-resource/create"},"http://localhost:8080/swagger-ui/index.html?configUrl=/api-docs/swagger-config#/metadata-resource/create")),(0,a.kt)("p",null,"If the link doesn\u2019t open the right Swagger section, you can navigate to Metadata-Resource\n\u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/metadata/workflow")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swagger UI - Metadata - Workflow",src:n(923).Z})),(0,a.kt)("p",null,"Paste the workflow payload into the Swagger API and hit Execute."),(0,a.kt)("p",null,"Now if you head over to the UI, you can see this workflow definition created:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conductor UI - Workflow Definition",src:n(7901).Z})),(0,a.kt)("p",null,"If you click through you can see a visual representation of the workflow:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conductor UI - Workflow Definition - Visual Flow",src:n(4146).Z})),(0,a.kt)("h2",{id:"2-running-your-first-workflow"},"2. Running your First Workflow"),(0,a.kt)("p",null,"Let\u2019s run this workflow. To do that you can use the swagger API under the workflow-resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/swagger-ui/index.html?configUrl=/api-docs/swagger-config#/workflow-resource/startWorkflow_1"},"http://localhost:8080/swagger-ui/index.html?configUrl=/api-docs/swagger-config#/workflow-resource/startWorkflow_1")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swagger UI - Metadata - Workflow - Run",src:n(7833).Z})),(0,a.kt)("p",null,"Hit ",(0,a.kt)("strong",{parentName:"p"},"Execute"),"!"),(0,a.kt)("p",null,"Conductor will return a workflow id. You will need to use this id to load this up on the UI. If your UI installation has\nsearch enabled you wouldn't need to copy this. If you don't have search enabled (using Elasticsearch) copy it from the\nSwagger UI."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swagger UI - Metadata - Workflow - Run",src:n(7040).Z})),(0,a.kt)("p",null,"Ok, we should see this running and get completed soon. Let\u2019s go to the UI to see what happened."),(0,a.kt)("p",null,"To load the workflow directly, use this URL format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:5000/execution/<WORKFLOW_ID>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<WORKFLOW_ID>")," with your workflow id from the previous step. You should see a screen like below. Click on the\ndifferent tabs to see all inputs and outputs and task list etc. Explore away!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conductor UI - Workflow Run",src:n(5902).Z})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this blog post \u2014 we learned how to run a sample workflow in your Conductor installation. Concepts we touched on:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Workflow creation"),(0,a.kt)("li",{parentName:"ol"},"System tasks such as HTTP"),(0,a.kt)("li",{parentName:"ol"},"Running a workflow via API")),(0,a.kt)("p",null,"Thank you for reading, and we hope you found this helpful. Please feel free to reach out to us for any questions and we\nare happy to help in any way we can."))}f.isMDXComponent=!0},923:function(e,t,n){t.Z=n.p+"assets/images/metadataWorkflowPost-4da3ce332f4c615fa959985d97ef7a2d.png"},7833:function(e,t,n){t.Z=n.p+"assets/images/metadataWorkflowRun-aaa9059b487e8ea2fd978db1568d46f5.png"},7901:function(e,t,n){t.Z=n.p+"assets/images/uiWorkflowDefinition-4e96b9e059e7912fd2def04eaf8c700a.png"},4146:function(e,t,n){t.Z=n.p+"assets/images/uiWorkflowDefinitionVisual-3ce9dfb5f8bfa48071045f593ad5130c.png"},5902:function(e,t,n){t.Z=n.p+"assets/images/workflowLoaded-58f9ba6dd04f0822b0ecf9b8d664dadd.png"},7040:function(e,t,n){t.Z=n.p+"assets/images/workflowRunIdCopy-43739783c678a759d1aba98190b35a16.png"}}]);