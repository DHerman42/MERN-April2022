let array = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];

let swap = (array, leftIndex, rightIndex) => {
	var temp = array[leftIndex];
	array[leftIndex] = array[rightIndex];
	array[rightIndex] = temp;
};
let partition = (array, left, right) => {
	let pivot = array[Math.floor((right + left) / 2)],
		i = left,
		j = right;
	while (i <= j) {
		while (array[i] < pivot) i++;
		while (array[j] > pivot) j--;
		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}
	return i;
};

let quickSort = (array, left, right) => {
	var index;
	if (array.length > 1) {
		index = partition(array, left, right);
		if (left < index - 1) {
			quickSort(array, left, index - 1);
		}
		if (index < right) {
			quickSort(array, index, right);
		}
	}
	return array;
};

var sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);
