export class Presenter {
    constructor() {
        this.backedMoneyNumber = document.getElementById('number');
        this.totalBackersNumber = document.getElementById('total');
        this.daysLeftNumber = document.getElementById('days');
        this.bamboStandNumber = document.getElementById('bamboStand');
        this.blackStandNumber = document.getElementById('blackStand');
        this.mahoganyNumber = document.getElementById('mahogany');
        // modal
        this.modalNumber = document.getElementById('modalNumber');
        this.modalBlack = document.getElementById('modalBlack');
        this.modalSpecial = document.getElementById('modalSpecial');
        this.bookmarkedIcon = document.getElementById('bookmarkedIcon');
        this.openModalBtn = document.getElementById('openModal');
        this.openModalBtn.onclick = () => this.openModal();
        this.closeModalBtn = document.getElementById('closeModal');
        this.closeModalBtn.onclick = () => this.closeModal();
        window.onclick = (event) => this.outsideClick(event);
        this.projectModal = document.getElementById('projectModal');
        // bookmarked button
        this.buttonSecondary = document.getElementById('bookmarkedBtn');
        this.buttonSecondary.onclick = () => this.bookmark();
        this.backedMoney = 89914;
        this.totalBackers = 5007;
        this.daysLeft = 56;
        this.bamboStand = 101;
        this.blackStand = 64;
        this.specialEdition = 0;
        this.bookmarked = false;
        this.inputGroups = document.getElementsByClassName('inputGroups');
        this.gridInputs = document.getElementsByClassName('gridInput');
        // this.inputGroups.onclick = (event) => this.checkRadioInput(event);
        for (let i = 0; i < this.gridInputs.length; i++) {
            this.gridInputs[i].onclick = (event) => this.stopLabelEvent(event);
        }
        for (let i = 0; i < this.inputGroups.length; i++) {
            this.inputGroups[i].onclick = (event) => this.checkRadioInput(event);
        }
        this.showValues();
        this.createForm();
    }

    showValues() {
        this.backedMoneyNumber.innerHTML = `$${this.backedMoney}`;
        this.totalBackersNumber.innerHTML = `${this.totalBackers}`;
        this.daysLeftNumber.innerHTML = `${this.daysLeft}`;
        this.bamboStandNumber.innerHTML = `${this.bamboStand}`;
        this.modalNumber.innerHTML = `${this.bamboStand}`;
        this.blackStandNumber.innerHTML = `${this.blackStand}`;
        this.modalBlack.innerHTML = `${this.blackStand}`;
        this.mahoganyNumber.innerHTML = `${this.specialEdition}`;
        this.modalSpecial.innerHTML = `${this.specialEdition}`;
    }

    bookmark() {
        this.bookmarked = !this.bookmarked;
        if (this.bookmarked) {
            this.buttonSecondary.classList.remove("btnSecondary");
            this.buttonSecondary.classList.add("btnSecondaryBookmarked");
            this.buttonSecondary.innerHTML = '<img class="filterGreen" src="assets/icon-bookmark.svg" />' + 'Bookmarked';
        } else {
            this.buttonSecondary.innerText = '<img src="assets/icon-bookmark.svg" />';
            this.buttonSecondary.classList.remove("btnSecondaryBookmarked");
            this.buttonSecondary.classList.add("btnSecondary");
            this.buttonSecondary.innerHTML = '<img src="assets/icon-bookmark.svg" />' + 'Bookmark';
        }
    }

    openModal() {
        this.projectModal.style.display = 'block';
    }

    closeModal() {
        this.projectModal.style.display = 'none';
    }

    outsideClick(event) {
        if (event.target === projectModal) {
            this.projectModal.style.display = 'none';
        }
    }

    createForm() {
        this.form = document.createElement('form');
        this.form.setAttribute("action", "submit.php");
        this.pledgeInput = document.createElement("input");
        this.pledgeInput.setAttribute("type", "text");
        this.pledgeInput.setAttribute("name", "money");
        this.submitInput = document.createElement("button");
        this.submitInput.innerHTML = "Pledge";
        this.form.appendChild(this.pledgeInput);
        this.form.appendChild(this.submitInput);
        // document.getElementById(event.target.id).appendChild(form);
        //document.body.appendChild(form);
    }

    stopLabelEvent(event) {
        event.stopImmediatePropagation();
    }

    checkRadioInput(event) {
        // event.preventDefault();
        event.stopImmediatePropagation();
        console.log('broj puta')
        let nearestArticle = event.target.closest("article");
        let idNearestArticle = document.getElementById(nearestArticle.id);
        console.log(idNearestArticle)
        this.appendForm(idNearestArticle);
        // let createdDiv = document.createElement('div');
        // idNearestArticle.appendChild(createdDiv);
    }

    appendForm(divId) {
        console.log(this.form)
        divId.appendChild(this.form);
    }
}