const contractNo = document.querySelector('.contractNo');
const owner = document.querySelector('.owner');
const spouse = document.querySelector('.spouse');
const type = document.querySelector('.type');
const dateIssued = document.querySelector('.dateIssued');
const date = (new Date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

window.addEventListener("unload", () => {
    localStorage.clear();
});

if (localStorage.getItem('club') === 'HL') {
    
    contractNo.textContent += localStorage.getItem('contractNo');
    owner.textContent += localStorage.getItem('owner');
    spouse.textContent += localStorage.getItem('spouse');
    type.textContent += localStorage.getItem('type');
    dateIssued.textContent += date;

    alert(`Please copy this Contract No: ${localStorage.getItem('contractNo')}`)
    window.print()

    setTimeout(() => {

    localStorage.clear();
    window.location.href = '/HTML/index.html';
    
    }, 3000);
}