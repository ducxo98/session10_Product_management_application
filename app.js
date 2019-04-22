let app = new function() {
    this.element = document.getElementById('products');
    this.products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Apple iPhone 6S', 'Apple iPhone 8 Plus', 'Oppo A71'];

    this.count = function(data) {
        let element   = document.getElementById('counter');
        let name = 'product';
        if (data) {
            if (data > 1) {
                name = 'products';
            }
            element.innerHTML = data + ' ' + name ;
        } else {
            element.innerHTML = 'No ' + name;
        }
    };

    this.fetchAll = function() {
        let data = '';
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                data += '<tr>';
                data += '<td>' + this.products[i] + '</td>';
                data += '<td><button onclick="app.edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.products.length);
        return this.element.innerHTML = data;
    };

    this.add = function () {
        element = document.getElementById('add-name');
        let product = element.value;
        if (product) {
            this.products.push(product.trim());
            element.value = '';
            this.fetchAll();
        }
    };

    this.edit = function (item) {
        let element = document.getElementById('edit-name');
        element.value = this.products[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            let product = element.value;
            if (product) {
                self.products.splice(item, 1, product.trim());
                self.fetchAll();
                closeInput();
            }
        }
    };

    this.delete = function (item) {
        this.products.splice(item, 1);
        this.fetchAll();
    };

};
app.fetchAll();
function closeInput() {
    document.getElementById('spoiler').style.display = 'none';
}