// Selecting elements from the DOM
const balanceElement = document.getElementById('balance');
const expenseForm = document.getElementById('expenseForm');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expenseList');

// Initialize balance
let balance = 0

// Function to display balance
function displayBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

// Function to add a new expense
function addExpense(description, amount) {
    // Create new expense item
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
        <span>${description}</span>
        <span>$${amount.toFixed(2)}</span>
        <button onclick="removeExpense(${amount})">Remove</button>
    `;

    // Add to expense list
    expenseList.appendChild(expenseItem);

    // Update balance
    balance -= amount;
    displayBalance();
}

// Function to handle form submission
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const text = textInput.value;
    const amount = parseFloat(amountInput.value);

    if (text.trim() === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid text and amount.');
        return;
    }

    addExpense(text, amount);

    // Clear input fields
    textInput.value = '';
    amountInput.value = '';
});

// Function to remove an expense
function removeExpense(amount) {
    // Remove from DOM
    balance += amount;
    displayBalance();
    event.target.parentElement.remove();
}

// Initial display of balance
displayBalance();



