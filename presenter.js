export class Presenter {
    constructor() {
        this.hamburger = document.querySelector(".hamburger");
        this.navMenu = document.querySelector(".navMenu");
        this.navLink = document.querySelectorAll(".navLink");
        for (let i = 0; i < this.navLink.length; i++) {
            this.navLink[i].onclick = (event) => this.closeMenu();
        }
        this.hamburger.onclick = () => this.mobileMenu();
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
        this.closeSuccessModalBtn = document.getElementById('closeSuccessModal');
        this.closeSuccessModalBtn.onclick = () => this.closeSuccessModal();
        window.onclick = (event) => this.outsideClick(event);
        this.projectModal = document.getElementById('projectModal');
        this.successModal = document.getElementById('successModal');
        // bookmarked button
        this.buttonSecondary = document.getElementById('bookmarkedBtn');
        this.buttonSecondary.onclick = () => this.bookmark();
        this.backedMoney = 89914;
        this.backedMoneyNeeded = 100000;
        this.totalBackers = 5007;
        this.daysLeft = 56;
        this.bamboStand = 101;
        this.blackStand = 64;
        this.specialEdition = 0;
        this.bookmarked = false;
        this.inputGroups = document.getElementsByClassName('inputGroups');
        this.gridInputs = document.getElementsByClassName('gridInput');
        for (let i = 0; i < this.gridInputs.length; i++) {
            this.gridInputs[i].onclick = (event) => this.stopLabelEvent(event);
        }
        for (let i = 0; i < this.inputGroups.length; i++) {
            this.inputGroups[i].onclick = (event) => this.checkRadioInput(event);
        }
        this.showValues();
        this.createForm();
        this.closeSuccessModal();
        this.progress = document.getElementsByClassName('greenProgress')[0];
    }

    mobileMenu() {
        this.hamburger.classList.toggle("active");
        this.navMenu.classList.toggle("active");
    }

    closeMenu() {
        this.hamburger.classList.remove("active");
        this.navMenu.classList.remove("active");
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
        this.form = document.createElement("form");
        this.form.setAttribute("class", "pledge");
        this.spanPledge = document.createElement("span");
        this.spanPledge.innerHTML = "Enter your pledge";
        this.pledgeInput = document.createElement("input");
        this.pledgeInput.setAttribute("class", "pledgeInput");
        this.pledgeInput.setAttribute("type", "number");
        this.pledgeInput.setAttribute("autocomplete", "off");
        this.pledgeInput.setAttribute("name", "money");
        this.pledgeInput.setAttribute("id", "money");
        this.pledgeInput.setAttribute("class", "inputField")
        this.pledgeInput.onclick = (event) => event.stopPropagation();
        this.submitButton = document.createElement("button");
        this.submitButton.innerHTML = "Continue";
        this.submitButton.setAttribute("type", "submit");
        this.submitButton.setAttribute("class", "btnReward")
        this.submitButton.setAttribute("class", "btnPrimary")
        this.form.onsubmit = (event) => this.changeValuesForPledge(event);
        this.form.appendChild(this.spanPledge);
        this.form.appendChild(this.pledgeInput);
        this.form.appendChild(this.submitButton);
    }

    stopLabelEvent(event) {
        event.stopImmediatePropagation();
    }

    changeValuesForPledge(event) {
        event.preventDefault();
        this.valueFromInput = this.pledgeInput.value;
        if (this.valueFromInput === '')
            this.valueFromInput = 0;
        this.backedMoney = this.backedMoney + parseInt(this.valueFromInput);
        this.backedMoneyNumber.innerHTML = `$${this.backedMoney}`;
        this.totalBackers++;
        this.totalBackersNumber.innerHTML = this.totalBackers;
        this.progress.value = parseInt(this.backedMoney / 1000);
        if (event.target.parentElement.id === '2') {
            this.bamboStand--;
            this.bamboStandNumber.innerHTML = `${this.bamboStand}`;
            this.modalNumber.innerHTML = `${this.bamboStand}`;
        } else if (event.target.parentElement.id === '3') {
            this.blackStand--;
            this.blackStandNumber.innerHTML = `${this.blackStand}`;
            this.modalBlack.innerHTML = `${this.blackStand}`;
        }
        this.closeModal();
        this.openSuccessModal();
    }

    checkRadioInput(event) {
        let nearestArticle = event.target.closest("article");
        let idNearestArticle = document.getElementById(nearestArticle.id);
        this.setMinAndMax(idNearestArticle);
        this.childNumber = nearestArticle.querySelector('.number')
        if (!(this.childNumber.innerHTML === '0' || this.childNumber.innerHTML.length === 0)) {
            this.appendForm(idNearestArticle);
        } else {
            this.appendButton(idNearestArticle);
        }
    }

    setMinAndMax(value) {
        if (value.id === '2') {
            this.minimum = 25;
            this.maximum = 74;
        } else if (value.id === '3') {
            this.minimum = 75;
            this.maximum = this.backedMoneyNeeded - this.backedMoney;
        }
        this.pledgeInput.setAttribute("min", this.minimum);
        this.pledgeInput.setAttribute("max", this.maximum);
    }

    appendForm(divId) {
        this.spanPledge.style.display = 'block';
        this.pledgeInput.style.display = 'block';
        divId.appendChild(this.form);
    }

    appendButton(divId) {
        divId.appendChild(this.form);
        this.spanPledge.style.display = 'none';
        this.pledgeInput.style.display = 'none';
    }

    openSuccessModal() {
        this.successModal.style.display = 'block';
    }

    closeSuccessModal() {
        this.successModal.style.display = 'none';
    }

}