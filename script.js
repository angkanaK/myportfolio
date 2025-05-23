function showSection(id){
    const section = document.querySelectorAll('main section');
    section.forEach(section=>{
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
} 
document.getElementById('btn-about').onclick =()=> showSection('about');
document.getElementById('btn-project').onclick=()=>showSection('project');
