function calculateAggregates() {
    const entryTestScore = parseFloat(document.getElementById('entryTest').value);
    const matricScore = parseFloat(document.getElementById('matric').value);
    const fscScore = parseFloat(document.getElementById('fsc').value);

    if (isNaN(entryTestScore) || isNaN(matricScore) || isNaN(fscScore)) {
        alert("Please enter valid scores.");
        return;
    }

    const engineeringAggregate = (entryTestScore * 0.40) + (matricScore * 0.10) + (fscScore * 0.50);
    const nonEngineeringAggregate = (entryTestScore * 0.50) + (matricScore * 0.15) + (fscScore * 0.35);

    document.getElementById('result').innerHTML = `
        <div class="result">
            <h2>Engineering Aggregate:</h2>
            <p>${engineeringAggregate.toFixed(2)}</p>
        </div>
        <div class="result">
            <h2>Non-Engineering Aggregate:</h2>
            <p>${nonEngineeringAggregate.toFixed(2)}</p>
        </div>
    `;
}

function resetForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('result').innerHTML = '';
}
