import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button, Form } from 'react-bootstrap';

const initialData = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 80 }
  ];

const  CrudTable = () => {

    const [products, setProducts] = useState(initialData);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
  
    const columns = [
      { dataField: 'id', text: 'ID', editable: false },
      { dataField: 'name', text: 'Product Name' },
      { dataField: 'price', text: 'Price' },
      {
        dataField: 'actions',
        text: 'Actions',
        isDummyField: true,
        formatter: (_, row) => (
          <Button size="sm" variant="secondary" onClick={() => handleEdit(row)}>Edit</Button>
        )
      }
    ];
  
    const handleEdit = (product) => {
      setEditingProduct(product);
      setShowModal(true);
    };
  
    const handleDeleteSelected = () => {
      setProducts(products.filter(p => !selected.includes(p.id)));
      setSelected([]);
    };
  
    const handleSave = () => {
      if (editingProduct.id) {
        setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
      } else {
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        setProducts([...products, { ...editingProduct, id: newId }]);
      }
      setShowModal(false);
      setEditingProduct(null);
    };
  
    const handleAdd = () => {
      setEditingProduct({ name: '', price: '' });
      setShowModal(true);
    };
  
    const [selected, setSelected] = useState([]);
  
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      selected,
      onSelect: (row, isSelect) => {
        setSelected(isSelect ? [...selected, row.id] : selected.filter(x => x !== row.id));
      },
      onSelectAll: (isSelect, rows) => {
        setSelected(isSelect ? rows.map(r => r.id) : []);
      }
    };
    
    return(
<div className="container mt-4">
      <div className="d-flex justify-content-between mb-2">
        <h4>Product List</h4>
        <div>
          <Button variant="primary" className="me-2" onClick={handleAdd}>Add Product</Button>
          <Button variant="danger" onClick={handleDeleteSelected} disabled={selected.length === 0}>Delete Selected</Button>
        </div>
      </div>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        selectRow={selectRow}
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
        striped
        hover
        condensed
      />

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct?.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={editingProduct?.name || ''}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={editingProduct?.price || ''}
                onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
};

export default CrudTable;