## Contribuir

Para contribuir al proyecto, sigue estas instrucciones:

### Flujo de Trabajo de Git

1. **Clonar el Repositorio**

   Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/CamiloEscar/frontend-Tp-integrador-legos.git
    cd frontend-Tp-integrador-legos
    ```

2. **Crear una Nueva Rama**

   Siempre trabaja en una nueva rama para tus cambios:

    ```bash
    git checkout -b nombre-de-la-rama
    ```

   Reemplaza `nombre-de-la-rama` con un nombre descriptivo para tu tarea, por ejemplo, `feature/login-page` o `bugfix/fix-product-details`.

3. **Hacer Cambios y Commits**

   Realiza los cambios necesarios en el código. Una vez que hayas terminado, añade tus cambios al área de staging:

    ```bash
    git add .
    ```

   Haz un commit con un mensaje descriptivo de los cambios realizados:

    ```bash
    git commit -m "Descripción clara y concisa de los cambios"
    ```

4. **Actualizar la Rama Principal**

   Antes de hacer un push, asegúrate de que tu rama esté actualizada con los últimos cambios en la rama principal:

    ```bash
    git checkout main
    git pull origin main
    git checkout nombre-de-la-rama
    git rebase main
    ```

   Resuelve cualquier conflicto si es necesario.

5. **Hacer Push a GitHub**

   Envía tus cambios a tu rama en GitHub:

    ```bash
    git push origin nombre-de-la-rama
    ```

6. **Crear una Pull Request (PR)**

   Ve a [GitHub](https://github.com/CamiloEscar/frontend-Tp-integrador-legos) y crea una Pull Request desde tu rama hacia la rama principal (`main` o `master`).

   1. Navega a la pestaña "Pull requests" en el repositorio de GitHub.
   2. Haz clic en "New pull request".
   3. Selecciona tu rama en el menú desplegable "compare".
   4. Escribe un título y una descripción para tu Pull Request.
   5. Revisa los cambios y haz clic en "Create pull request".

7. **Revisión de Código**

   Tu Pull Request será revisado por otros miembros del equipo. Ellos pueden hacer comentarios y sugerencias. Asegúrate de responder a los comentarios y realizar los ajustes necesarios.

8. **Fusionar la Pull Request**

   Una vez que la Pull Request sea revisada y aprobada, se fusionará en la rama principal. Si eres responsable de la fusión, asegúrate de hacerlo con cuidado.

    ```bash
    git checkout main
    git pull origin main
    ```

   Elimina la rama si ya no es necesaria:

    ```bash
    git branch -d nombre-de-la-rama
    git push origin --delete nombre-de-la-rama
    ```

### Buenas Prácticas

- **Commits Pequeños y Frecuentes**: Realiza commits pequeños y con frecuencia para facilitar la revisión y la integración de cambios.
- **Mensajes de Commit Claros**: Usa mensajes de commit claros y descriptivos para facilitar la comprensión de los cambios realizados.
- **Pruebas y Validación**: Asegúrate de que tu código esté bien probado antes de hacer un commit. Si es necesario, añade nuevas pruebas para validar tus cambios.
- **Documentación**: Actualiza la documentación si tus cambios afectan el uso o la configuración del proyecto.
