"use client";
import * as zod from "zod";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { ConversationSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
  const form = useForm<zod.infer<typeof ConversationSchema>>({
    resolver: zodResolver(ConversationSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: zod.infer<typeof ConversationSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our the most advanced conversation AI"
        Icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
             rounded-lg 
             border 
             w-full 
             p-4 
             px-3 
             md:px-6 
             focus-within:shadow-sm
             grid
             grid-cols-12
             gap-2
           "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I make an HTTP request in javaScript"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          Content
        </div>
      </div>
    </div>
  );
};
export default ConversationPage;
