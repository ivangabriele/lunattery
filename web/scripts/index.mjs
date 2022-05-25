/* eslint-disable class-methods-use-this */

class App {
  #contracts = {}
  #web3Provider = null

  constructor() {
    this.bindEvents()
    this.init()
  }

  bindEvents = () => {
    document
      .querySelectorAll('.btn-adopt')
      .forEach($adoptionButton => $adoptionButton.addEventListener('click', this.handleAdopt))
  }

  /**
   * @param {MouseEvent} event
   */
  handleAdopt = event => {
    event.preventDefault()

    /** @type {HTMLButtonElement} */
    const $adoptionButton = event.target
    const petId = Number($adoptionButton.dataset.id)
    // eslint-disable-next-line no-console
    console.log(petId)

    /*
     * Replace me...
     */
  }

  init = async () => {
    const response = await fetch('/data/pets.json')
    /** @type {Record<string, any>[]} */
    const pets = await response.json()

    const $petsRow = document.querySelector('#petsRow')
    /** @type {HTMLTemplateElement} */
    const $petTemplate = document.querySelector('#petTemplate')

    pets.forEach(pet => {
      const $petClone = $petTemplate.content.cloneNode(true)

      $petClone.querySelector('.panel-title').textContent = pet.name
      $petClone.querySelector('img').src = pet.picture
      $petClone.querySelector('.pet-breed').textContent = pet.breed
      $petClone.querySelector('.pet-age').textContent = pet.age
      $petClone.querySelector('.pet-location').textContent = pet.location
      $petClone.querySelector('.btn-adopt').dataset.id = pet.id

      $petsRow.appendChild($petClone)
    })

    return this.initWeb3()
  }

  initContract = () =>
    /*
     * Replace me...
     */

    this.bindEvents()

  initWeb3 = async () =>
    /*
     * Replace me...
     */

    this.initContract()

  markAdopted = () => {
    /*
     * Replace me...
     */
  }
}

// eslint-disable-next-line no-new
new App()
