import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {Table, TableModule} from "primeng/table";



const meta:Meta<Table> = {
  title: 'Primeng/Table',
  decorators: [moduleMetadata({
    imports: [TableModule]
  })],
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    value: []
  },
  render: (args: any) => ({
    template: `
        <p-table [value]="[
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
    ]" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td class="text-sm font-medium text-black">{{ product.code }}</td>
            <td class="text-sm font-medium text-black">{{ product.name }}</td>
            <td class="text-sm font-medium text-black">{{ product.category }}</td>
            <td class="text-sm font-medium text-black">{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`
  })
}

export default meta;

type Story = StoryObj<Table>;

export const Default: Story = {
  args: {
    value: [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 80,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
    ]
  },
};
