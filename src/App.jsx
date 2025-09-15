import './App.css'

function App() {
  return (
    <div>
      <div>
        <h1>CICD JENKINS DEMO</h1>
        <p>
          Jenkins source code uses git repo and set branch <b>/main</b>.  
          Poll SCM triggers option <code>* * * * *</code>.  
          Build step → <b>Windows batch command</b>:  
          <u>call npm install</u>  
          <u>call npm run dev</u>  
          rmdir "C:\......tomcat9\webapps\jenkinsfrontdemo"  
          mkdir "C:\......tomcat9\webapps\jenkinsfrontdemo"  
          xcopy path
        </p>
      </div>

      <div>
        <p>
          Build step → <b>Windows batch command</b>:  
          stop tomcat 9  
          start tomcat 9
        </p>
      </div>
    </div>
  );
}

export default App
