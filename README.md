### Página de información del proyecto

Guia para la incorporación de cambios

#### Rama

Ejemplo
```bash
git switch main
git pull
git switch -c feature/update-readme

# Usando git checkout
git checkout -b feature/12345_update_readme
git push -u origin feature/12345_update_readme
```

---

#### Commit

Commit descriptivo

Ejemplo
```bash
git add .
git commit -m "docs: update project documentation"
```

---

#### Pull Request/Merge Request

- Tener un título descriptivo.
- Explicar brevemente el cambio realizado.
- Indicar qué archivos fueron modificados.
- Asociarse con la rama main.

---

#### Protección de la rama principal

Reglas básicas de protección para `main`.

Como mínimo:

* Evitar modificaciones directas.
* Requerir Pull Request/Merge Request.
* Requerir que las validaciones de CI sean exitosas antes del merge.


