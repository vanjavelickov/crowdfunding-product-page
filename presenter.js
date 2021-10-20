export class Presenter {
    constructor() {
        this.backedMoneyNumber = document.getElementById('number');
        this.totalBackersNumber = document.getElementById('total');
        this.daysLeftNumber = document.getElementById('days');
        this.bamboStandNumber = document.getElementById('bamboStand');
        this.blackStandNumber = document.getElementById('blackStand');
        this.mahoganyNumber = document.getElementById('mahogany');
        this.modalNumber = document.getElementById('modalNumber');
        this.modalBlack = document.getElementById('modalBlack');
        this.modalSpecial = document.getElementById('modalSpecial');
        this.backedMoney = 89914;
        this.totalBackers = 5007;
        this.daysLeft = 56;
        this.bamboStand = 101;
        this.blackStand = 64;
        this.specialEdition = 0;
        this.bookmarked = false;
        this.bookmarkedIcon = document.getElementById('bookmarkedIcon');
        this.buttonSecondary = document.getElementById('bookmarkedBtn');
        this.buttonSecondary.onclick = () => this.bookmark();
        this.showValues();
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
        }
        else {
            console.log('tu sam')
           this.buttonSecondary.innerText = '<img src="assets/icon-bookmark.svg" />';
            this.buttonSecondary.classList.remove("btnSecondaryBookmarked");
            this.buttonSecondary.classList.add("btnSecondary");
            this.buttonSecondary.innerHTML = '<img src="assets/icon-bookmark.svg" />' + 'Bookmark';

        }


        // this.submitButton = this.containerDiv.getElementsById('submit');
        // this.submitButton.onsubmit = (event) => this.closeModal(event);
    }
}