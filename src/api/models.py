from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(150), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    user_type = db.Column(db.String(50), unique=False, nullable=False)  # 'consumer' o 'provider'

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_type": self.user_type,
            # do not serialize the password, its a security breach
        }

class Material(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), unique=True, nullable=False)
    stock = db.Column(db.Boolean, unique=False, nullable=False)

    def __repr__(self):
        return f'<Material {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "type": self.type, 
            "name": self.name,
            "stock": self.stock,
        }

class Pedido(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_consumer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user_consumer = db.relationship('User', foreign_keys=[user_consumer_id], backref='pedidos_consumidos')
    user_provider_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user_provider = db.relationship('User', foreign_keys=[user_provider_id], backref='pedidos_proveidos')
    fecha = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(50), unique=False, nullable=False)

    def __repr__(self):
        return f'<Pedido {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_consumer": self.user_consumer.email,
            "user_provider": self.user_provider.email,
            "fecha": self.fecha,
            "status": self.status,
            "materiales": [pm.serialize() for pm in self.pedido_materiales],
        }

class PedidoMaterial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pedido_id = db.Column(db.Integer, db.ForeignKey('pedido.id'), nullable=False)
    material_id = db.Column(db.Integer, db.ForeignKey('material.id'), nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)

    pedido = db.relationship('Pedido', backref=db.backref('pedido_materiales', lazy=True))
    material = db.relationship('Material', backref=db.backref('pedido_materiales', lazy=True))

    def __repr__(self):
        return f'<PedidoMaterial {self.id}, cantidad: {self.cantidad}>'

    def serialize(self):
        return {
            "id": self.id,
            "pedido_id": self.pedido_id,
            "material_id": self.material_id,
            "cantidad": self.cantidad,
        }
