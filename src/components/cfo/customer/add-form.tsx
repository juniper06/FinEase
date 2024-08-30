"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  customerType: z.string({
    message: "Please select an Customer Type to display.",
  }),
  customerFirstName: z.string().min(1, {
    message: "Customer First Name is Required",
  }),
  customerLastName: z.string().min(1, {
    message: "Customer Last Name is Required",
  }),
  companyName: z.string().min(1, {
    message: "Company Name is Required",
  }),
  customerEmail: z.string().min(1, {
    message: "Customer Email is Required",
  }),
  customerNumber: z.string().min(1, {
    message: "Customer Phone Number is Required",
  }),
  country: z.string().min(1, {
    message: "Customer Address is Required",
  }),
  city: z.string().min(1, {
    message: "City is Required",
  }),
  state: z.string().min(1, {
    message: "State is Required",
  }),
  zipCode: z.coerce.number({
    message: "Zip Code is Required",
  }),
});

export default function CustomerForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerType: "",
      customerFirstName: "",
      customerLastName: "",
      companyName: "",
      customerEmail: "",
      customerNumber: "",
      country: "",
      city: "",
      state: "",
      zipCode: 6000,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="md:grid md:grid-cols-2"
      >
        <div className="md:flex md:flex-col md:gap-y-5">
          <h1 className="md:text-xl md:font-bold md:mb-5">Customer Details</h1>
          <FormField
            control={form.control}
            name="customerType"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">
                  Customer Type
                </FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="md:w-[500px]">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Customer Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Individual">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="md:flex md:items-end gap-x-5">
            <FormField
              control={form.control}
              name="customerFirstName"
              render={({ field }) => (
                <FormItem className="md:flex md:items-center">
                  <FormLabel className="md:w-48 md:text-lg font-light">
                    Customer Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="First Name"
                      {...field}
                      className="md:w-60"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerLastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      placeholder="Last Name"
                      {...field}
                      className="md:w-60"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="customerEmail"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">
                  Customer Email
                </FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerNumber"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">
                  Customer Phone
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Mobile Number"
                    {...field}
                    className="md:w-[500px]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex md:flex-col md:gap-y-5">
          <h1 className="md:text-xl md:font-bold md:mb-5">Customer Address</h1>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">Address</FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">City</FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">State</FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="md:flex md:items-center">
                <FormLabel className="md:w-48 md:text-lg font-light">Zip Code</FormLabel>
                <FormControl>
                  <Input required {...field} className="md:w-[500px]" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <footer className="fixed bottom-0 w-full flex py-5 space-x-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="default" className="w-[150px]">
                Save
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save Changes</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to save these changes?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="w-[150px]">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="w-[150px]"
                  onClick={form.handleSubmit(handleSubmit)}
                >
                  Save
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Cancel Changes</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to cancel? Unsaved changes will be lost.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Stay</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    form.reset();
                    toast({
                      description: "Changes have been discarded.",
                    });
                  }}
                >
                  Discard
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </footer>
      </form>
    </Form>
  );
}