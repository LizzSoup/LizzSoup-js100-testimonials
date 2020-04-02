const img = document.getElementById('customer-img');
const name = document.getElementById('customer-name');
const review = document.getElementById('customer-text');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const customers = [
    {
        img: './img/customer-0.jpg',
        name: 'John', 
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'
    },
    {
        img: './img/customer-1.jpg',
        name: 'Sandy', 
        review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
    },
    {
        img: './img/customer-2.jpg',
        name: 'Amy', 
        review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
        img: './img/customer-3.jpg',
        name: 'Tyrell', 
        review: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
        img: './img/customer-4.jpg',
        name: 'Wanda', 
        review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}    
];

let counter = 0;

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

// Functions
function prev() {
    if (counter === 0) {
        counter = customers.length;
    };
    counter--;
    setCurrent(counter)
};

function next() {
    counter++;
    if (counter === customers.length) {
        counter = 0;
    };
    setCurrent(counter)
};

/**
 * Populates the DOM with data from the element at the given index of the
 * customers array.
 */
function setCurrent(index) {
  img.src = customers[index]['img'];
  name.innerHTML = customers[index]['name'];
  review.innerHTML = customers[index]['review']; 
}

// Initialize the DOM with the first element in the customers array
setCurrent(0)