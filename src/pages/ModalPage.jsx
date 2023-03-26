import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin dui ac diam eleifend, et iaculis turpis convallis.
        Vestibulum mollis interdum leo sed hendrerit. Fusce ultrices vestibulum
        felis, eget iaculis nisl viverra at. Mauris at arcu at neque feugiat
        mollis. Donec vitae diam non felis pharetra volutpat. Proin lacinia
        placerat tellus. Quisque mollis eros vel magna blandit blandit. Sed
        iaculis malesuada ultrices. Etiam accumsan imperdiet eros nec dignissim.
        Praesent gravida felis sit amet neque molestie, quis pretium augue
        congue. Quisque et consectetur nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
        porttitor sem vitae vestibulum ornare. Maecenas dignissim dictum urna,
        in rhoncus felis efficitur sed. Etiam vestibulum ultricies leo at
        bibendum. Integer scelerisque mauris eu metus faucibus, ut auctor velit
        rhoncus. Proin quis velit quis arcu tempus sollicitudin nec et justo.
        Pellentesque vulputate lectus at pharetra placerat. Nulla et purus
        feugiat, accumsan orci at, semper erat. Fusce vitae euismod diam. Nam
        accumsan est quis rutrum vehicula.
      </p>
    </div>
  );
}
