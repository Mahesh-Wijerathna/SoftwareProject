import logo from './logo.svg';
import './App.css';

function App() {
  /*
  H:\5th_SEMESTER\01 SOFTWARE PROJECT\Softwareproject2023.10.28\software_project>git commit -m "changes59"
[master 897bedc] changes59
 1 file changed, 1 insertion(+), 1 deletion(-)

H:\5th_SEMESTER\01 SOFTWARE PROJECT\Softwareproject2023.10.28\software_project>git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 374 bytes | 187.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/Mahesh-Wijerathna/SoftwareProject.git
   e5ac0fb..897bedc  master -> master

H:\5th_SEMESTER\01 SOFTWARE PROJECT\Softwareproject2023.10.28\software_project>
*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          මගේ  project එකේ පලවෙනි user විදිහට අක්කව සාදරෙන් පිලිගන්නවා<br/>
          හලෝ මම මේක ඉස්සල්ලම හදපු එක මේක වෙනස් කරන්න නම් පුලුවන් ඕනවිදිහකට ..<br/>
          මේ වගේ ඒවා හදලා business එකක් කරමුද?<br/>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ane manda ithin
        </a>
      </header>
    </div>
  );
}

export default App;
